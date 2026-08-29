import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_SOURCE = path.join(__dirname, '../../../components/src/ui');

export async function build() {
  console.log('🔨 Building registry...\n');

  const files = await fs.readdir(COMPONENTS_SOURCE);
  const componentFiles = files.filter(f => f.endsWith('.svelte'));

  const registry = {
    $schema: 'https://shadcn-ui-svelte.com/schema/registry.json',
    name: 'shadcn-ui-svelte',
    homepage: 'https://shadcn-ui-svelte.com',
    items: []
  };

  for (const file of componentFiles) {
    const name = file.replace('.svelte', '');
    const content = await fs.readFile(path.join(COMPONENTS_SOURCE, file), 'utf-8');
    
    // Extract dependencies from imports
    const dependencies = [];
    const importMatches = content.matchAll(/from\s+['"]([^'"]+)['"]/g);
    for (const match of importMatches) {
      const dep = match[1];
      if (!dep.startsWith('$lib/') && !dep.startsWith('./') && !dep.startsWith('../')) {
        dependencies.push(dep);
      }
    }

    registry.items.push({
      name,
      type: 'registry:ui',
      title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: `A ${name} component`,
      files: [
        {
          path: `ui/${file}`,
          type: 'registry:ui'
        }
      ],
      registryDependencies: []
    });
  }

  // Add utility files
  const libDir = path.join(__dirname, '../../../components/src/lib');
  try {
    const libFiles = await fs.readdir(libDir);
    for (const file of libFiles) {
      if (file.endsWith('.ts')) {
        const name = file.replace('.ts', '');
        registry.items.push({
          name,
          type: 'registry:lib',
          title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          description: `A ${name} utility`,
          files: [
            {
              path: `lib/${file}`,
              type: 'registry:lib'
            }
          ],
          registryDependencies: []
        });
      }
    }
  } catch {}

  // Write registry.json
  await fs.mkdir('registry', { recursive: true });
  await fs.writeFile('registry/registry.json', JSON.stringify(registry, null, 2));
  console.log('✅ Created registry/registry.json');

  // Write individual registry items
  await fs.mkdir('registry/items', { recursive: true });
  for (const item of registry.items) {
    await fs.writeFile(
      `registry/items/${item.name}.json`,
      JSON.stringify(item, null, 2)
    );
  }
  console.log(`✅ Created ${registry.items.length} registry items`);

  console.log('\n🎉 Registry built successfully!');
}
