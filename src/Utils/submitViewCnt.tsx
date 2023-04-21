import useAxiosWithAuth from '../Hooks/useAxiosWithAuth';

type ViewCountData = {
  id: string;
  viewCnt: number;
};

export async function submitViewCntData() {
  const axiosInstance = useAxiosWithAuth();

  const viewCntData: ViewCountData[] = JSON.parse(
    localStorage.getItem('viewCnt') || 'null'
  );

  const data: { viewCnt: { [key: string]: number } } = {
    viewCnt: Object.fromEntries(
      viewCntData.map(({ id, viewCnt }: ViewCountData) => [id, viewCnt])
    ),
  };

  const url = 'http://127.0.0.1:8000/addViewCnt';
  const response = await axiosInstance.put(url, data);
  console.log(response.data);
}
