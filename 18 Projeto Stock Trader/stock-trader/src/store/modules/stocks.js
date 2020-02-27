import stocks from '../../data/stocks'

export default {
    state: {
        stocks: [

        ]
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                //A função math.random varia de 0 a 0.99, o - 0.45 é para variar o numero com uma leve tendencia a alta
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            })
        }
    },
    actions: {
        buyStock({commit}, order) {
            commit('buyStock', order)
        },
        initStocks({commit}) {
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}