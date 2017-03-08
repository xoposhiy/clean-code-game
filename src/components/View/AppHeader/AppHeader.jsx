import React, { Component } from 'react';
import classnames from 'classnames';
import { requestSignIn, requestSignOut, goToMainPage } from '../../../actions';
import './AppHeader.css';

export default class AppHeader extends Component {
  login = () => {
    this.props.dispatch(requestSignIn())
  }
  logout = () => this.props.dispatch(requestSignOut())

  render() {
    const isUserLogin = Boolean(this.props.userName)

    return <div className="header">
      <div className="container header">
        <div className={classnames("header-text", "header-conteiner-text", { "tall": this.props.tall })}>
          <div className="header-login">
            <span className="header-login-username">{ isUserLogin ? this.props.userName : '' }</span>
            {isUserLogin && <a className="header-login-link" href="#" onClick={this.logout}>Выйти</a>}
            {isUserLogin || <a className="header-login-link" href="#" onClick={this.login}>Войти</a>}
          </div>
          <h1 className="header-name-text pointer" onClick={() => this.props.dispatch(goToMainPage())}>
            The Clean Code Game
          </h1>
          <h2>
            Версия C#
          </h2>
        </div>
      </div>
    </div>
  }
}