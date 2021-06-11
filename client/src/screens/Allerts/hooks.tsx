import {MutationUpdaterFn, useMutation, useQuery} from '@apollo/client';
import {CREATE_ALERT, UPDATE_ALERT} from '../../https/mutations/Alerts';
import {GET_ALL_ALERTS} from '../../https/query/Alerts';
import {Alert} from '../../types/OtherTypes';

interface UpdateCacheTypes {
  getAllAlerts: Alert[];
}

const updateCache: MutationUpdaterFn = (state, {data}) => {
  const value = state.readQuery<UpdateCacheTypes>({
    query: GET_ALL_ALERTS,
  });
  state.writeQuery({
    query: GET_ALL_ALERTS,
    data: {
      getAllAlerts: value?.getAllAlerts.map(alert =>
        +alert.id === +data?.updateAlert.id ? data?.updateAlert : {alert},
      ),
    },
  });
};

const updateAddCache: MutationUpdaterFn = (state, {data}) => {
  const value = state.readQuery<UpdateCacheTypes>({
    query: GET_ALL_ALERTS,
  });
  state.writeQuery({
    query: GET_ALL_ALERTS,
    data: {
      getAllAlerts: [...(value?.getAllAlerts || []), data?.createAlert],
    },
  });
};
export function useAlertsFeetch() {
  const {data: alerts} = useQuery(GET_ALL_ALERTS);
  const [addAlert] = useMutation(CREATE_ALERT, {update: updateAddCache});
  const [updateAlert] = useMutation(UPDATE_ALERT, {update: updateCache});

  return {addAlert, updateAlert, alerts};
}
