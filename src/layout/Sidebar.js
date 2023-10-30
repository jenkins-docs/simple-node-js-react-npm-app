import React from 'react';
import './sidebar.scss';

const Sidebar = ({routes}) => {
    return (
        <div className="sidebar">
            <div className='sidebar-top'>
                <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                    <div className={'box-image'}>
                        <i style={{fontSize: 20, color: 'white'}} className='fa fa-briefcase'/>
                    </div>
                    <div className={'sidebar-text'}>
                        <span style={{fontSize: 12}}>T-8004</span>
                        <span style={{fontWeight: 'bold'}}>Test</span>
                    </div>
                </div>
                <div>
                    <i style={{color: 'white'}} className={'fa fa-star'}/>
                </div>

            </div>
            <div className='button-actions'>
                <button className={'btn-submit'}>Edit</button>
                <select>
                    <option>Actions</option>
                </select>
            </div>
            <hr/>
            <hr style={{marginTop: '4rem'}}/>
            <ul>
                <li>Data Modal</li>
                <hr/>
                <li>User Interface</li>
                <hr/>
                <li>Business Logic</li>
                <hr/>
                <li>Security</li>
                <hr/>
                <li>Api Integration</li>
                <hr/>
                <li>Workflow</li>
                <hr/>
                <li>Admin</li>
                <hr/>

            </ul>
        </div>
    );
};

export default Sidebar;