import MockData from '@/config/mock';

const filterDetails  = (path: String) => {
    return  path.split('-').map(key => `${MockData}[${key}]`)
}



export { filterDetails}