// index.d.ts

type Logger = {
    /**
     * A custom info logging function.
     */
    info?: (message : string) => void,
    /**
     * A custom trace logging function.
     */
    trace?: (message : string | Error) => void,
    /**
     * A custom warn logging function.
     */
    warn?: (message : string) => void,
    /**
     * A custom error logging function.
     */
    error?: (message : string) => void,
    /**
     * Log to default console. It true the default console logging functions will be used.
     */
    toConsole?: boolean
};

type TemplateGroup = {
    /**
     * Translation group
     */
    group: string,
    /**
     * Translation keys
     */
    items: Array<string>
};

type ExportOptions = {
    /**
     * The root directory of your source files.
     */
    rootPath: string ,
    /**
     * The full path of a source file.
     */
    filePath?: string,
    /**
     * A regex to filter source files by name or extension. Defaults to `\.jsx?$`.
     */
    filter?: string,
    /**
     * A custom logger.
     */
    logger?: Logger,
    /**
     * A progress callback.
     */
    progress?: (current: number, total: number, name: string) => void,
     /**
     * A custom preprocessor like `./preprocessors/typescript`.
     */
    preprocessor?: string | ((code: string) => string),
    /**
     * A custom postprocessor like `./postprocessors/po`.
     */
    postprocessor?: string | ((templates: Array<string | TemplateGroup>) => string),
    /**
     * A custom babylon configuration.
     */
    babylonConfig?: {}
};

type SchemaOptions = {
    /**
     * The root directory of your source files.
     */
    rootPath: string ,
    /**
     * The target path of the JSON schema.
     */
    schemaPath?: string,
    /**
     * A regex to filter source files by name or extension. Defaults to `\.jsx?$`.
     */
    filter?: string,
    /**
     * A custom logger.
     */
    logger?: Logger,
    /**
     * A progress callback.
     */
    progress?: (current: number, total: number, name: string) => void,
    /**
     * A custom preprocessor like `./preprocessors/typescript`.
     */
    preprocessor?: string | ((code: string) => string),
    /**
     * A custom babylon configuration.
     */
    babylonConfig?: {},
    /**
     * The number of spaces to be used instead of tabs. if not set tabs will be used.
     */
    indention?: number
};

type ValidateOptions = {
    /**
     * The root directory of your source files.
     */
    rootPath: string ,
    /**
     * The path of the JSON schema to validate against.
     */
    schemaPath?: string,
    /**
     * A custom logger.
     */
    logger?: Logger,
    /**
     * A progress callback.
     */
    progress?: (current: number, total: number, name: string) => void
};

/**
 * Generates a JSON schema based on i18n tagged template literals.
 *
 * @param options The schema options.
 */
export function generateTranslationSchema(options: SchemaOptions) : Promise<{}>

/**
 * Generates an array of all i18n tagged template literals in a file.
 *
 * @param options The export options.
 */
export function exportTranslationKeys(options: ExportOptions) : Promise<Array<string | TemplateGroup> | string>

/**
 * Validates a translation file or folder and calculates translation coverage
 *
 * @param options The validation options.
 */
export function validateTranslations(options: ValidateOptions) : Promise<string>