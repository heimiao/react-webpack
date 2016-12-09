var React = require('react');
 module.exports = React.createClass({
  render: function () {
  	var styles={
  		border:"1px solid red",
  		width:"500px",
  		height:"600px"
  	};
  	
  	console.log(this.props.data);
  	 var commentNodes=this.props.data.map(function(comment){
			return (
				<div key={comment} className="btn_warning">遍历</div>
			);
	    }); 
	    
    return (
    	<div>
    		<h1>
		       	欢迎黑猫进入React编程世界！！！
		     </h1>
		     <a className="btn_default">默认按钮</a>
		    <input type="button" className="btn_error" value="错误按钮"/>
		    <span className="btn_success">成功按钮</span>
		    
		    {commentNodes}
		    
		    <button className="btn_info">普通按钮</button>
		    {
		    	/*
		    	 <div style={styles} className="test_img"></div>	   
		    	<img src="image/test.jpg">
		    	 */
		    } 
		    
		    <img src={require('../images/test.jpg')}/>
		    <div style={styles} className="test_img"></div>
			
			
    	</div> 
    ); 
  }
});
