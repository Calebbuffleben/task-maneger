
const Dashboard = () => {
  return (

<div className="page">
  <div className="pageHeader">
    <div className="title">Dashboard</div>
    <div className="userPanel"><i className="fa fa-chevron-down"></i><span className="username">John Doe</span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg" width="40" height="40"/></div>
  </div>
  <div className="main">
    <div className="nav">
      <div className="searchbox">
        <div><i className="fa fa-search"></i>
          <input type="search" placeholder="Search"/>
        </div>
      </div>
      <div className="menu">
        <div className="title">Navigation</div>
        <ul>
          <li> <i className="fa fa-home"></i>Home</li>
          <li><i className="fa fa-signal"></i>Activity</li>
          <li className="active"> <i className="fa fa-tasks"></i>Manage Tasks</li>
          <li> <i className="fa fa-envelope"></i>Messages</li>
        </ul>
      </div>
    </div>
    <div className="view">
      <div className="viewHeader">
        <div className="title">Manage Tasks</div>
        <div className="functions">
          <div className="button active">Add New Task</div>
          <div className="button">Completed</div>
          <div className="button inverz"><i className="fa fa-trash-o"></i></div>
        </div>
      </div>
      <div className="content">
        <div className="list">
          <div className="title">Today</div>
          <ul>
            <li className="checked"><i className="fa fa-check-square-o"></i><span>Update team page</span>
              <div className="info">
                <div className="button green">In progress</div><span>Complete by 25/04/2014</span>
              </div>
            </li>
            <li><i className="fa fa-square-o"></i><span>Design a new logo</span>
              <div className="info">
                <div className="button">Pending</div><span>Complete by 10/04/2014</span>
              </div>
            </li>
            <li><i className="fa fa-square-o"></i><span>Find a front end developer</span>
              <div className="info"></div>
            </li>
          </ul>
        </div>
        <div className="list">
          <div className="title">Tomorrow</div>
          <ul>
            <li><i className="fa fa-square-o"></i><span>Find front end developer</span>
              <div className="info"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Dashboard;
