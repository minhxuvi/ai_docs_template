import * as vscode from 'vscode';
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://localhost:11434' });

export function activate(context: vscode.ExtensionContext) {
    // Register the command
    let disposable = vscode.commands.registerCommand('xuvi.generateText', async () => {
        try {
            // Get user input
            const prompt = await vscode.window.showInputBox({
                prompt: 'Enter your prompt for text generation',
                placeHolder: 'Type your prompt here...'
            });

            // Check if user cancelled the input
            if (!prompt) {
                return;
            }

            // Show progress while generating
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Generating text with Ollama...",
                cancellable: false
            }, async (progress) => {
                try {
                    // Call Ollama API with specified parameters
                    const response = await ollama.chat({
                        model: 'llama3.1:8b',
                        messages: [{ role: 'user', content: prompt }],
                        options: {
                            temperature: 0,
                            seed: 42
                        }
                    });

                    // Extract message content
                    const generatedText = response.message.content;

                    // Show the result in a new document
                    const doc = await vscode.workspace.openTextDocument({
                        content: `Prompt: ${prompt}\n\n---\n\n${generatedText}`,
                        language: 'markdown'
                    });

                    await vscode.window.showTextDocument(doc);

                } catch (error) {
                    vscode.window.showErrorMessage(`Error generating text: ${error}`);
                }
            });

        } catch (error) {
            vscode.window.showErrorMessage(`Error: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }