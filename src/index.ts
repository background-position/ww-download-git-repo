import wget from 'download';
import { downloadType } from './type';
const download: downloadType = async (url, destination, options) => {
    try {
        if (!Array.isArray(url)) {
            url = [url];
        }
        await Promise.all(url.map((url) => wget(url, destination, options)));
        return {
            status: true,
            error: null,
        };
    } catch (error) {
        return {
            status: false,
            error,
        };
    }
};
export default download;
