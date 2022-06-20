import React from 'react';
import * as S from './styled'


function Profile() {
  return (
    <S.Wrapper>
         
        
         <div>
            <img src="https://avatars.githubusercontent.com/u/46249363?v=4" alt="GithubProfile"></img>
            <h1>Jocélio Vieira</h1>
            <h4>UserName</h4>
            <span>Joceliovs</span>
        </div>
    
        <div>
            <h4>Followers</h4>
            <span>1</span>
        </div>
        <div>
            <h4>Starreds</h4>
            <span>1</span>
        </div>
        <div>
            <h4>Followings</h4>
            <span>1</span>
        </div>
        
      <div>Repositories</div>
      <div>Starreds</div>
        
    </S.Wrapper>
  );
};

export default Profile;