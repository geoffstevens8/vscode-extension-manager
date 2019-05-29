# vscode-extension-manager

## Installation

`$ npm install vscode-extension-manager`

## API

``` typescript
import {
    getExtensions,
    getExtensionsWithVersions,
    installExtension,
    uninstallExtension } from 'vscode-extension-manager'

// returns an array of installed extensions
await CodeExtensionManager.getExtensions()

// returns an array of arrays with extensions and their versions
await CodeExtensionManager.getExtensionsWithVersions()

// installs an extension given an extension's unique identifier
await CodeExtensionManager.installExtension(publisher.extensionName)

// uninstalls an extension given an extension's unique identifier
await CodeExtensionManager.uninstallExtension(publisher.extensionName)

```