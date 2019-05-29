'use strict';

// import { extensions } from 'vscode';
import { exec } from 'child_process';

// helper function to execute a terminal command
async function execute(command:string){
    return new Promise((resolve, reject) => {
        exec(command, 
            (error: any, stdout: any, stderr: any) => { 
                if (error) {
                    reject(error);
                    return;
                }
                resolve(stdout.trim());
            }
        );
    });
};

// returns an array of all extensions currently installed
export async function getExtensions() {
    let result: any = null;
    var command = 'code --list-extensions';
    try {
        result = await execute(command); 
        result = result.split('\n');
    } catch(e) {
        result = { error: e.message }; 
    };

    return result;
}

// returns an array of arrays with currently installed extensions and their versions
export async function getExtensionsWithVersions() {
    let result: any = null;
    var command = 'code --list-extensions --show-versions';
    try {
        result = await execute(command); 
        result = result.trim().split('\n');
        result = result.map((x: string) => x.split('@')); 
    } catch(e) {
        result = { error: e.message }; 
    };

    return result;
}

// install an extension, takes argument publisher.extensionName
export async function installExtension(extensionID:any){
    let result: any = null;
    var command =  `code --install-extension ${extensionID}`;
    try {
        result = await execute(command); 
    } catch(e) {
        result = { error: e.message }; 
    };

    return result;
}

// remove an extension, takes argument publisher.extensionName
export async function uninstallExtension(extensionID:any){
    let result: any = null;
    var command = `code --uninstall-extension ${extensionID}`;
    try {
        result = await execute(command); 
    } catch(e) {
        result = { error: e.message }; 
    };

    return result;
}
