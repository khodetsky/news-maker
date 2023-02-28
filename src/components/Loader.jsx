import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Triangle
          height="120"
          width="120"
          color="#3f51b5"
          ariaLabel="triangle-loading"
          wrapperStyle={{justifyContent: "center", paddingTop: "150px"}}
          wrapperClassName=""
          visible={true}
        />
    )
}