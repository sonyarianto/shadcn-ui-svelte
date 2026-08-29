import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';

const DEFAULT_COMPONENTS_DIR = '$lib/components/ui';
const DEFAULT_UTILS_FILE = '$lib/utils.ts';
const DEFAULT_CSS_FILE = 'src/app.css';

export async function init() {
  console.log('🎯 Initializing shadcn/ui for Svelte...\n');

  const response = await prompts([
    {
      type: 'text',
      name: 'componentsDir',
      message: 'Where should components be placed?',
      initial: DEFAULT_COMPONENTS_DIR
    },
    {
      type: 'text',
      name: 'utilsFile',
      message: 'Where is the utils file?',
      initial: DEFAULT_UTILS_FILE
    },
    {
      type: 'text',
      name: 'cssFile',
      message: 'Where is your global CSS file?',
      initial: DEFAULT_CSS_FILE
    },
    {
      type: 'select',
      name: 'baseColor',
      message: 'Which base color would you like?',
      choices: [
        { title: 'Neutral', value: 'neutral' },
        { title: 'Stone', value: 'stone' },
        { title: 'Zinc', value: 'zinc' },
        { title: 'Slate', value: 'slate' },
        { title: 'Gray', value: 'gray' }
      ],
      initial: 0
    }
  ]);

  // Create components.json
  const config = {
    $schema: 'https://shadcn-ui-svelte.com/schema.json',
    style: 'new-york',
    tailwind: {
      config: '',
      css: response.cssFile,
      baseColor: response.baseColor,
      cssVariables: true,
      prefix: ''
    },
    aliases: {
      components: '$lib/components',
      ui: response.componentsDir,
      lib: '$lib',
      hooks: '$lib/hooks',
      utils: response.utilsFile
    }
  };

  await fs.writeFile('components.json', JSON.stringify(config, null, 2));
  console.log('\n✅ Created components.json');

  // Create utils file if it doesn't exist
  const utilsPath = response.utilsFile.replace('$lib/', 'src/');
  try {
    await fs.access(utilsPath);
    console.log('ℹ️  Utils file already exists, skipping...');
  } catch {
    const utilsContent = `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cnPrimitive(...inputs: ClassValue[]) {
  return clsx(inputs);
}
`;
    await fs.writeFile(utilsPath, utilsContent);
    console.log(`✅ Created ${utilsPath}`);
  }

  // Create components directory
  const componentsPath = response.componentsDir.replace('$lib/', 'src/');
  await fs.mkdir(componentsPath, { recursive: true });
  console.log(`✅ Created ${componentsPath}`);

  console.log('\n🎉 Done! Now run `shadcn-ui-svelte add button` to add components.');
}
