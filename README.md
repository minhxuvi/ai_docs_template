# Xuvi - VS Code Extension for Ollama Text Generation

A VS Code extension that integrates with Ollama to generate text based on user prompts using the llama3.1:8b model.

## Features

- Generate text using Ollama's llama3.1:8b model
- Deterministic output with temperature set to 0
- Reproducible results with seed set to 42
- Simple command palette integration
- Results displayed in a new document

## Prerequisites

Before using this extension, you need to have Ollama installed and running:

1. Install Ollama from [https://ollama.ai](https://ollama.ai)
2. Start Ollama service (it should run on `http://localhost:11434` by default)
3. Pull the required model:

   ```bash
   ollama pull llama3.1:8b
   ```

## Installation

### From Source (Development)

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

   ```bash
   npm install
   ```

4. Compile the extension:

   ```bash
   npm run compile
   ```

5. Press `F5` to launch a new VS Code window with the extension loaded

### Package and Install

1. Install `vsce` globally:

   ```bash
   npm install -g vsce
   ```

2. Package the extension:

   ```bash
   vsce package
   ```

3. Install the generated `.vsix` file in VS Code

## Usage

1. Open the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows/Linux)
2. Type "Generate Text with Ollama" or "Xuvi" and select the command
3. Enter your prompt in the input box
4. Wait for the text generation to complete
5. The result will open in a new document showing both your prompt and the generated text

## Configuration

The extension uses the following default settings:

- **Model**: `llama3.1:8b`
- **Temperature**: `0` (deterministic output)
- **Seed**: `42` (reproducible results)
- **Ollama Host**: `http://localhost:11434`

## Development

### Project Structure

```text
├── src/
│   └── extension.ts          # Main extension code
├── .vscode/
│   ├── launch.json          # Debug configuration
│   └── tasks.json           # Build tasks
├── package.json             # Extension manifest
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

### Building

```bash
npm run compile
```

### Watching for Changes

```bash
npm run watch
```

### Debugging

1. Open the project in VS Code
2. Press `F5` to start debugging
3. A new Extension Development Host window will open
4. Test the extension in the new window

## Requirements Met

This extension fulfills all the specified requirements:

- ✅ Uses the llama3.1:8b model
- ✅ Sends the prompt as a user message
- ✅ Sets temperature to 0 for deterministic output
- ✅ Sets seed to 42 for reproducibility
- ✅ Returns only the message content from the response
- ✅ Integrated as a VS Code extension

## Troubleshooting

### Common Issues

1. **"Error generating text"**: Ensure Ollama is running and the llama3.1:8b model is installed
2. **Connection refused**: Check that Ollama is running on `http://localhost:11434`
3. **Model not found**: Run `ollama pull llama3.1:8b` to download the required model

### Debugging Steps

1. Check Ollama status:

   ```bash
   ollama list
   ```

2. Test Ollama directly:

   ```bash
   ollama run llama3.1:8b "Hello, world!"
   ```

3. Check VS Code Developer Tools (Help → Toggle Developer Tools) for error messages

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
