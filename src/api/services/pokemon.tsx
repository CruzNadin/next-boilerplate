/* eslint-disable import/no-anonymous-default-export */
import axios from '../axios';

const getList = () => axios.get(`/ability`);

export default { getList };
