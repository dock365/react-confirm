import * as React from "react";

export interface IConfirmDialogProps {
  onConfirm: () => void;
  onCancel?: () => void;
  message?: string;
  title?: string;
}

export interface IComponentProps {
  confirm?: (message?: string, title?: string) => void;
  confirmed?: boolean;
}

export interface IComponentState {
  confirmBox: boolean;
  isConfirmed: boolean;
  message?: string;
  title?: string;
}

const Confirm = <P extends IConfirmDialogProps>(ConfirmDialog: React.ComponentType<P>) => {
  return <P extends IComponentProps>(Component: React.ComponentType<P>) => {
    type ComponentPropsType = P & IConfirmDialogProps & IComponentProps;
    return class extends React.Component<ComponentPropsType, IComponentState> {
      constructor(props: ComponentPropsType) {
        super(props);

        this.state = {
          confirmBox: false,
          isConfirmed: false,
          message: "",
        }
        this.confirm = this.confirm.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);
      }
      public render() {
        return (
          <div>
            <Component {...this.props} confirm={this.confirm} confirmed={this.state.isConfirmed} />
            {this.state.confirmBox ? <ConfirmDialog onConfirm={this.onConfirm} onCancel={this.onCancel} message={this.state.message} title={this.state.title} /> : null}
          </div>
        )
      }
      public confirm(message?: string, title?: string) {
        this.setState({
          isConfirmed: false,
          confirmBox: true,
          message,
          title,
        });
      }

      public onConfirm() {
        this.setState({
          isConfirmed: true,
          confirmBox: false,
          message: "",
          title: "",
        });
      }

      public onCancel() {
        this.setState({
          isConfirmed: false,
          confirmBox: false,
          message: "",
          title: "",
        });
      }
    }
  }
}

export default Confirm;