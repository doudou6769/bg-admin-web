import {get} from '../../base';

// 实现用户登录
export const query = params => {
    // /user/login这个就是后台的controller方法里的响应的地址，params就是我们的入参
    return get('/dict/page',params);
};
