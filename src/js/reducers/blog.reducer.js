/**
 * Created by chenkang1 on 2017/6/3.
 */

const initialState = {
    type:'test'
};

const blog = (state = initialState, action) => {

    switch (action.type) {
        case 'test':
            return state;

        default:
            return state;
    }
};

export default blog;