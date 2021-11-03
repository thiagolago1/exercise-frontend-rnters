// import { api } from '../../services/api';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from 'react-i18next';

export function SearchBar() {

  const [items, setItems] = useState<any>(["GoPro Hero 3","GoPro Hero 9","GoPro Hero 4 Silver","GoPro","GOPRO 3"]);
  const [searchText, setSearchText] = useState<any>("");
  const [activeSearchList, setActiveSearchList] = useState<Boolean>(false);
  const [searchCountryText, setSearchCountryText] = useState<any>("");
  const [activeFilters, setActiveFilters] = useState<Boolean>(false);
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");

  const { t } = useTranslation();

  function handleSearch(item: string) {
    // api call
    if(item !== "") {
      setActiveSearchList(true);
    } else {
      setActiveSearchList(false);
    }
  }

  return (
    <>
      <div className={styles.divContainer}>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
        <div className={styles.divSearchBar}>
          <span className={styles.spanSearch}>⌕</span>
          <input
            className={styles.inputSearch}
            id="search"
            type="text"
            value={searchText}
            placeholder="Ex. GoPro"
            onChange={(event) => {
              setSearchText(event.target.value)
              handleSearch(event.target.value)
            }}
          >
          </input>
          { searchText !== ""
            ?
              <button
              className={styles.clearButton}
              onClick={() => {
                setSearchText("")
                setActiveSearchList(false)
              }}
              >
                X
              </button>
            : ""
          }
          <button
            className={styles.buttonFilter}
            onClick={() => {
              setActiveFilters(!activeFilters)
              setActiveSearchList(false)
              }}
            >
            {t('filter')}
          </button>
          <a className={styles.buttonSearch} id="hp-search" href="#">{t('search')}</a>
        </div>

        { activeSearchList
          ?
          <div className={styles.divSearchBarResult}>
            <ul className={styles.listContainer}>
              {items.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchText(item)
                      setActiveSearchList(false)
                    }}
                  >
                    ⌕ {item}
                  </li>
                )
              })}
            </ul>
          </div>
          : ''
        }

        { activeFilters
          ?
            <div className={styles.filtersContainer}>
              <div className={styles.filterCountry}>
                <input
                  className={styles.inputCountry}
                  type="text"
                  placeholder="Ex. Lisboa"
                  name="location"
                  value={searchCountryText}
                  onChange={(event) => {setSearchCountryText(event.target.value)}}
                />
              </div>
              <div className={styles.filterDateFrom}>
                <DatePicker placeholderText={t('dateFrom')} selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div className={styles.filterDateTo}>
                <DatePicker placeholderText={t('dateTo')} selected={endDate} onChange={(date) => setEndDate(date)} />
              </div>
            </div>
          : ''
        }
      </div>
    </>
  )
}