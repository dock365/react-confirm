import * as React from "react";

export interface IConfirmDialogProps {
  doConfirm: () => void;
  message?: string;
}

export interface IComponentProps {
  confirm: (message?: string) => void;
  confirmed: boolean;
}

export interface IComponentState {
  confirmBox: boolean;
  isConfirmed: boolean;
  message?: string;
}

const Confirm = <P extends IConfirmDialogProps>(ConfirmDialog: React.ComponentType<P>) => {
  return <P extends IComponentProps>(Component: React.ComponentType<P>) => {
    return class extends React.Component<P & IConfirmDialogProps & IComponentProps, IComponentState> {
      constructor() {
        super();

        this.state = {
          confirmBox: false,
          isConfirmed: false,
          message: "",
        }
        this.confirm = this.confirm.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
      }
      public render() {
        return (
          <div>
            <Component confirm={this.confirm} confirmed={this.state.isConfirmed} />
            {this.state.confirmBox ? <ConfirmDialog doConfirm={this.onConfirm} message={this.state.message} /> : null}
          </div>
        )
      }
      public confirm(message?: string) {
        this.setState({
          isConfirmed: false,
          confirmBox: true,
          message,
        });
      }

      public onConfirm() {
        this.setState({
          isConfirmed: true,
          confirmBox: false,
        });
        
      }
    }
  }
}

export default Confirm;