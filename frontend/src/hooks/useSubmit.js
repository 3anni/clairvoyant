import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useSubmit = ({createAction, onSuccess, wrap}) => {
  const dispatch = useDispatch();
  let [errors, setErrors] = useState([]);



  const handleSubmit = async e => {
    e.preventDefault();

    if (wrap.bool === false ) {
      console.count('in bool false');
      return setErrors(wrap.errors);
    } else {
      setErrors([]);
      console.count('in bool true');
      return dispatch(createAction())
         .catch(async res => {
            let data;
            try { data = await res.clone().json(); }
            catch { data = await res.text(); }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        })
        .then(onSuccess)
    }
  }

  return [errors, handleSubmit];
}

export default useSubmit;
