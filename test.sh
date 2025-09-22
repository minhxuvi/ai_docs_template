#!/bin/bash

# Test script for Xuvi VS Code Extension
# This script runs the tests for the extension

echo "Running Xuvi extension tests..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Compile TypeScript
echo "Compiling TypeScript..."
npm run compile

# Run tests
echo "Running tests..."
npm test

echo "Tests completed!"