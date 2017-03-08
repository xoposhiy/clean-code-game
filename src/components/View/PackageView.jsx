import React from 'react'
import cat from '../../img/cat.png'

export default class PackageView extends React.Component {
	render() {
  	return (
      <div className="container body">
    		<div className="home-text PackageView-package-buttons">
          {Object.keys(this.props.packages).map(id => {
              if (this.props.finishedPackages.includes(this.props.packages[id].beforePackage)) {
                return <button
                    className="btn btn-lg btn-primary btn-styled"
                    key={id}
                    onClick={this.props.startPackage(id)}
                  >
                    {this.props.packages[id].name}
                </button>
              }

              return <button
      					className="btn btn-lg btn-primary btn-styled PackageView-button-disable"
                disabled
                key={id}
              >
    					  {this.props.packages[id].name}
      				</button>
          }
          )}
    		 </div>
    		<img className="home-cat" src={cat} alt="clean code cat" />
    		<div className="clearfix"></div>
    	</div>
    )
  }
}