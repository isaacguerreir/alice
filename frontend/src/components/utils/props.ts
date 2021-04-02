import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface Props extends RouteComponentProps<any>{
    classes?: Record<string, string>
    property?: string 
}
