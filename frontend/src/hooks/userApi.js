import useSWR from 'swr';
import api from '../services/api';

export const useApi = (url) => {
    const { data, error } = useSWR(url, async (url) => {
        const res = await api.get(url);
        return res
    });

    return { data, error }
}