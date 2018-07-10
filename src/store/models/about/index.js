/**
 * Created by Administrator on 2018/7/6.
 */

const about = {
    state: {
        message: 'hello'
    }
    ,reducers: {
        aboutTest(state, payload) {
            // console.log('about')
            return {
                message: `${state.message}  ${payload}`
            }
        },
        // 监听其他模块的变化
        'conect/conectTest': (state, payload) => {
            return {
                message: 'this is conect chu fa'
            }
        }
    }
    ,effects: {
        async asyncTest(payload, rootState) {
            console.log(rootState)
            await new Promise(resolve => setTimeout(resolve, 3000))
            this.aboutTest(payload)
        }
    }
}

export default about

