import * as React from "react";

export interface IConfirmDialogProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  message?: string;
  title?: string;
  data?: any;
}

export interface IComponentProps {
  confirm?: (
    message?: string,
    title?: string,
    data?: any,
    onConfirmAction?: Function,
    onCancelAction?: Function,
  ) => void;
  confirmed?: boolean;
  confirmData?: any;
}

export interface IComponentState {
  confirmBox: boolean;
  isConfirmed: boolean;
  message?: string;
  title?: string;
  data?: any;
}

const Confirm = <P extends IConfirmDialogProps>(ConfirmDialog: React.ComponentType<IConfirmDialogProps>) => {
  return <P extends IComponentProps>(Component: React.ComponentType<P>) => {
    type ComponentPropsType = P & IConfirmDialogProps & IComponentProps;
    return class extends React.Component<ComponentPropsType, IComponentState> {
      public onConfirmAction: Function = () => { };
      public onCancelAction: Function = () => { };
      constructor(props: ComponentPropsType) {
        super(props);

        this.state = {
          confirmBox: false,
          isConfirmed: false,
          message: "",
          title: "",
          data: undefined,
        }
        this.confirm = this.confirm.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);
      }
      public render() {
        return (
          <React.Fragment>
            <Component {...this.props} confirm={this.confirm} confirmed={this.state.isConfirmed} confirmData={this.state.data} />
            {this.state.confirmBox ? <ConfirmDialog onConfirm={this.onConfirm} onCancel={this.onCancel} message={this.state.message} title={this.state.title} data={this.state.data} /> : null}
          </React.Fragment>
        )
      }
      public confirm(message?: string, title?: string, data?: any, onConfirmAction?: Function, onCancelAction?: Function) {
        if (onConfirmAction)
          this.onConfirmAction = onConfirmAction;

        if (onCancelAction)
          this.onCancelAction = onCancelAction;
        this.setState({
          isConfirmed: false,
          confirmBox: true,
          message,
          title,
          data,
        });
      }

      public onConfirm() {
        if (this.onConfirmAction) this.onConfirmAction(this.state.data);
        this.setState({
          isConfirmed: true,
          confirmBox: false,
          message: "",
          title: "",
        });
      }

      public onCancel() {
        if (this.onCancelAction) this.onCancelAction(this.state.data);
        this.setState({
          isConfirmed: false,
          confirmBox: false,
          message: "",
          title: "",
          data: undefined,
        });
      }
    }
  }
}

export default Confirm;