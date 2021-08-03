import { paths } from '../config';
import del from 'del';

export const clean = () => del(paths.clean);
