import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('xuvi.xuvi'));
    });

    test('Should register xuvi.generateText command', async () => {
        // First ensure the extension is activated
        const extension = vscode.extensions.getExtension('xuvi.xuvi');
        assert.ok(extension);
        
        if (!extension.isActive) {
            await extension.activate();
        }
        
        const commands = await vscode.commands.getCommands(true);
        assert.ok(commands.includes('xuvi.generateText'), 'Command xuvi.generateText should be registered');
    });

    test('Extension should activate', async () => {
        const extension = vscode.extensions.getExtension('xuvi.xuvi');
        assert.ok(extension);

        if (extension && !extension.isActive) {
            await extension.activate();
        }

        assert.ok(extension?.isActive);
    });
});