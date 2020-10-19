import { useSelector } from 'react-redux';
import { selectSessionData } from 'redux/sessionSlice';

const useSession = () => useSelector(selectSessionData);

export default useSession;
