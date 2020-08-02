import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail.js'
import faker from 'faker';
import ApprovalCard from './ApprovalCard'


const App = () => {
    console.log(faker.image.avatar())
    return (
        <div className='ui container comments'>
             <ApprovalCard>
                 <div>
                     <h4 style={{color:'red'}}>Warning!<span>⚠️</span></h4>
                     Are you sure you want this?
                 </div>
             </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Sam' timeAgo='Today at 4:45PM' postComment='What a nice blog!' faker={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Alex' timeAgo='Today at 2:00AM' postComment='Awesome Blog!' faker={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Jane' timeAgo='Today at 5:45PM' postComment='Keep it up, love it!' faker={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    )
};

ReactDOM.render(<App />, document.querySelector('#root'));