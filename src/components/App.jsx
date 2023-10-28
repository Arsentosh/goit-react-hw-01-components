const jacques = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const Profile = props => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={props.avatar}
          alt={props.username}
          class="avatar"
          width={120}
          height={120}
        />
        <p class="name">{props.username}</p>
        <p class="tag">{props.tag}</p>
        <p class="location">{props.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export const App = () => {
  return (
    <div
      style={
        {
          // // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }
      }
    >
      <Profile
        username={jacques.username}
        tag={jacques.tag}
        location={jacques.location}
        avatar={jacques.avatar}
        stats={jacques.stats}
      />
    </div>
  );
};
