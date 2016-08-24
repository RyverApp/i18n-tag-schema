// index.d.ts

/**
 * Generates a JSON schema based on i18n tagged template literals.
 * If no target schema is provided the json will be returned via callback output param.
 *
 * @param path Base path of the source directory.
 * @param filter File extension filter as regex string. e.g. \\.jsx?$
 * @param schema Path to the generated .json file. If no target schema is provided the json will be returned via callback output param
 * @param callback A callback function.
 */
export default function (path: string, filter: string, schema?: string, callback?: (output: string, type: 'info' | 'warn' | 'error' | 'success' | 'debug' | 'trace') => void) 

/**
 * Generates an array of all i18n tagged template literals in a file.
 * The array will be returned as json via callback output param.
 *
 * @param rootPath Root path.
 * @param path Path of the JavaScript source file or directory.
 * @param logger A logger function that accepts logging message and type 'info', 'warn', 'error', 'success', 'debug' or 'trace'.
 * @param callback A callback function.
 */
export function exportTranslationKeys(rootPath: string, path: string, logger?: (message: string, type: 'info' | 'warn' | 'error' | 'success' | 'debug' | 'trace') => void, callback?: (output: string) => void)

/**
 * Validates a translation file or folder and calculates translation coverage
 *
 * @param rootPath Path of the translation file or directory.
 * @param schemaPath Path of the translation schema.
 * @param callback A callback function that accepts logging message and type 'info', 'warn', 'error', 'success', 'debug' or 'trace'.
 */
export function validateSchema(rootPath: string, schemaPath: string, callback: (message: string, type: 'info' | 'warn' | 'error' | 'success' | 'debug' | 'trace') => void)