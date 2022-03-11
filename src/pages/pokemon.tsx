/* eslint-disable react-hooks/rules-of-hooks */

import useTranslation from 'next-translate/useTranslation';

import { pokemonServices } from '@/api';
import { Meta, Main } from '@/components/common';
import { useApi } from '@/hooks';

type Props = {
  data: Array<any>;
  loading: boolean;
};

export async function getServerSideProps() {
  const pokemonRequest = useApi(pokemonServices.getList);
  if (pokemonRequest) {
    const response = await pokemonRequest.request();
    if (response.success) {
      return {
        props: { data: response.data, loading: false },
      };
    }
  }
  return {
    props: { data: [], loading: false },
  };
}

const PokemonList = ({ data, loading = true }: Props) => {
  const { t } = useTranslation();
  return (
    <Main meta={<Meta title="Pokemon List" description="Pokemon List Page" />}>
      <div>
        {loading && (
          <div className="text-center">
            <span>{t('common:loading')}</span>
          </div>
        )}
        <ul className="list-disc">
          {data?.map((el: any, index: number) => (
            <li key={index}>
              <a href={el.url} target="_blank" rel="noreferrer">
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
};

export default PokemonList;
