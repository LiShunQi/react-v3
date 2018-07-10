/**
 * Created by Administrator on 2018/7/9.
 */
const conect = {
    state: {
        decription: 'this is connect state'
    }
    ,reducers: {
        conectTest: (state, payload) => ({
            decription: `${state.decription}  be changed`
        })
    }
    ,effects: {

    }
}

export default conect