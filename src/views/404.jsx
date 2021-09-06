import React from "react";
// import { withRouter } from 'react-router-dom'
import { withRouter } from '@/components/myReactRouterDom'

@withRouter
class _404 extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>404</div>
        )
    }
}
export default _404

// import React from "react";
// // import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
// import { useHistory, useLocation, useParams, useRouteMatch } from '@/components/myReactRouterDom'

// const _404 = () => {
//     const history = useHistory()
//     const location = useLocation()
//     const match = useRouteMatch()
//     const params = useParams()
//     console.log({
//         history,
//         location,
//         match,
//         params
//     });
//     return (
//         <div>404</div>
//     )
// }
// export default _404