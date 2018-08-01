import T from './types'

export const checkinRevenueReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case T.CHECKIN_SET_REVENUE_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case T.CHECKIN_REQUEST_REVENUE:
            return {
                loading: true,
                loaded: false,
                data: {}
            }
        case T.CHECKIN_RECEIVE_REVENUE:
            return {
                loading: false,
                loaded: true,
                data: action.data.revenue,
            }
        case T.CHECKIN_REQUEST_VERIFY_TEACHER_PAYMENT:
            return {
                ...state
            }
        case T.CHECKIN_RECEIVE_VERIFY_TEACHER_PAYMENT:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
