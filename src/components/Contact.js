import React from 'react';
import { lazyload } from 'react-lazyload';
 
@lazyload({
  height: 200,
  once: true,
  offset: 100
})
class Contact extends React.Component {
  render() {
    return <div>
        This is an 'Contact' component
    </div>;
  }
}