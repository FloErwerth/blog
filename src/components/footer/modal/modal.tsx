import {FunctionComponent, ReactElement} from 'react';
import * as React from "react";
import "./modal.scss";

interface OwnProps {
    selectedModal: ReactElement | undefined,
    closeModal: Function,
}

type Props = OwnProps;

const modal: FunctionComponent<Props> = (props) => {

    return (<div className={"modal-container"}>

        <div className={"modal"}>

            <div className={"modal-selection"}>
                <div className={"modal-return"} onClick={() => props.closeModal()}>Return</div>
                {props.selectedModal}</div>
        </div>
    </div>);
};

export default modal;
