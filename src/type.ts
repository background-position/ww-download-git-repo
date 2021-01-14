interface optionsType {
    extract?: boolean;
    filename?: string;
    proxy?: string;
    headers?: {
        [name: string]: string;
    };
}
interface res {
    status: boolean;
    error: any;
}
interface downloadType {
    (
        url: Array<string> | string,
        destination?: string,
        options?: optionsType,
    ): Promise<res>;
}
export { downloadType };
