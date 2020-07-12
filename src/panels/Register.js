import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, FormLayout, Input } from '@vkontakte/vkui';

const Register = props => (
    <Panel id = {props.id}>
        <PanelHeader>Вход/регистрация</PanelHeader>
        <FormLayout>
            <Input 
                type = "text"
                top = "Имя пользователя:"
                name = "Имя пользователя"  
            />
        </FormLayout>
    </Panel>
);

Register.propTypes = {
    id: PropTypes.string.isRequared,
    go: PropTypes.func.isRequired,
};

export default Register;