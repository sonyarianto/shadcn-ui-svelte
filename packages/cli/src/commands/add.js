import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_SOURCE = path.join(__dirname, '../../../components/src/ui');

export async function add(components, options = {}) {
  if (options.all) {
    await addAll(options);
    return;
  }

  if (!components || components.length === 0) {
    console.log('❌ Please specify components to add. Use `list` to see available components.');
    return;
  }

  // Read config
  let config;
  try {
    const configContent = await fs.readFile('components.json', 'utf-8');
    config = JSON.parse(configContent);
  } catch {
    console.log('❌ No components.json found. Run `init` first.');
    return;
  }

  const targetDir = config.aliases.ui.replace('$lib/', 'src/');
  await fs.mkdir(targetDir, { recursive: true });

  for (const component of components) {
    await installComponent(component, targetDir, options.overwrite);
  }

  console.log('\n🎉 Done!');
}

async function addAll(options) {
  let config;
  try {
    const configContent = await fs.readFile('components.json', 'utf-8');
    config = JSON.parse(configContent);
  } catch {
    console.log('❌ No components.json found. Run `init` first.');
    return;
  }

  const targetDir = config.aliases.ui.replace('$lib/', 'src/');
  await fs.mkdir(targetDir, { recursive: true });

  const files = await fs.readdir(COMPONENTS_SOURCE);
  const componentFiles = files.filter(f => f.endsWith('.svelte') || f.endsWith('.ts'));

  console.log(`📦 Installing ${componentFiles.length} components...\n`);

  for (const file of componentFiles) {
    await installComponent(file.replace('.svelte', '').replace('.ts', ''), targetDir, options.overwrite);
  }

  console.log('\n🎉 Done!');
}

async function installComponent(name, targetDir, overwrite = false) {
  // Try .svelte first, then .ts
  let sourcePath = path.join(COMPONENTS_SOURCE, `${name}.svelte`);
  let targetPath = path.join(targetDir, `${name}.svelte`);

  try {
    await fs.access(sourcePath);
  } catch {
    sourcePath = path.join(COMPONENTS_SOURCE, `${name}.ts`);
    targetPath = path.join(targetDir, `${name}.ts`);
    try {
      await fs.access(sourcePath);
    } catch {
      console.log(`⚠️  Component "${name}" not found, skipping...`);
      return;
    }
  }

  // Check if file exists
  try {
    await fs.access(targetPath);
    if (!overwrite) {
      console.log(`⏭️  ${name} already exists, skipping... (use --overwrite to replace)`);
      return;
    }
    console.log(`🔄 Overwriting ${name}...`);
  } catch {
    console.log(`📦 Installing ${name}...`);
  }

  const content = await fs.readFile(sourcePath, 'utf-8');
  await fs.writeFile(targetPath, content);
  console.log(`✅ ${name}`);
}
