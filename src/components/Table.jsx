import React, { useState } from "react";
import "./index.css";
import { DropdownCustom } from "../common/Dropdown";
import Modal from "../common/Modal";
import alert from "../assets/alert.svg";
import close from "../assets/x-close.svg";
import filter from "../assets/filter.svg";

const Table = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openBigModal, setOpenBigModal] = useState(false);
  const [openBigImgModal, setOpenBigImgModal] = useState(false);
  const [openBigSecondModal, setOpenBigSecondModal] = useState(false);
  const [sidebarModal, setSidebarModal] = useState(false);
  const currency = [
    { value: "승인여부 전체", label: "승인여부 전체" },
    { value: "승인대기", label: "승인대기" },
    { value: "승인완료", label: "승인완료" },
    { value: "승인거부", label: "승인거부" },
  ];
  const [currencySelect, setCurrencySelect] = useState({
    value: "승인여부 전체",
    label: "승인여부 전체",
  });
  const currencyy = [
    { value: "신청일시순", label: "신청일시순" },
    { value: "승인일시순", label: "승인일시순" },
  ];
  const [currencyySelect, setCurrencyySelect] = useState({
    value: "신청일시순",
    label: "신청일시순",
  });
  const currencyyy = [
    { value: "승인완료", label: "승인완료" },
    { value: "승인거부", label: "승인거부" },
  ];
  const [currencyyySelect, setCurrencyyySelect] = useState({
    value: "승인상태 변경",
    label: "승인상태 변경",
  });
  return (
    <div className="container" style={{marginTop: '20px'}}>
      <div className="flex gap-14 align-center main_header">
        <h1 className="heading">회원상세</h1>
        <div className="flex subtext">
          <span></span>
          <p>필수항목</p>
        </div>
      </div>
      <div className="button_group flex">
        <button
          onClick={() => {
            setOpenBigImgModal(true);
          }}
        >
          기본정보 관리
        </button>
        <button className="active">투자유형 관리</button>
        <button>입출금내역 조회</button>
        <button>영업내역 조회</button>
        <button>투자내역 조회</button>
        <button>채권내역 조회</button>
        <button>SMS 관리</button>
        <button>1:1문의내역 조회</button>
      </div>
      <div className="flex justify-between align-center table_heading flex-wrap">
        <div className="flex align-center gap-8">
          <h2 className="heading_two">신청 목록</h2>
          <p>
            (총 100명 | 승인대기 <span>1</span>건)
          </p>
        </div>
        <img
          src={filter}
          alt=""
          width={24}
          className="filter"
          onClick={() => setSidebarModal(true)}
        />
        <div className="flex gap-4 dropdown_group">
          <DropdownCustom
            options={currency}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencySelect}
            dropDown="header"
          />
          <DropdownCustom
            options={currencyy}
            onSelect={() => {}}
            selectedOption={currencyySelect}
            setSelectedOption={setCurrencyySelect}
            dropDown="header"
          />
          <DropdownCustom
            options={currencyyy}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencyyySelect}
            dropDown="header"
          />
        </div>
      </div>
      <div className="flex justify-between align-center table_sub_heading">
        <button
          className="dark_button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          등록
        </button>
        <div className="flex gap-4 align-center dropdown_group">
          <DropdownCustom
            options={currencyyy}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencyyySelect}
            dropDown="header"
          />
          <button
            className="dark_button"
            onClick={() => {
              setOpenBigModal(true);
            }}
          >
            저장
          </button>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="main_table">
          <tr>
            <th>No</th>
            <th>기존유형</th>
            <th>신청유형</th>
            <th>제출서류</th>
            <th>신청일시</th>
            <th>승인여부</th>
            <th>승인거부 사유</th>
            <th>승인일시</th>
            <th>관리자</th>
          </tr>
          <tr>
            <td>1</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="Waiting">승인대기</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="refusal">승인거부</span>
            </td>
            <td>
              서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로
              전문투자자 승인 불가
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr>
            <td>3</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td></td>
            <td></td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr>
            <td>4</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="Waiting">승인대기</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="refusal">승인거부</span>
            </td>
            <td>
              서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로
              전문투자자 승인 불가
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr>
            <td>6</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="Approval">승인대기</span>
            </td>
            <td></td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr>
            <td>7</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="Waiting">승인대기</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>소득적격</td>
            <td>개인전문</td>
            <td>
              <span>보기</span>
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>
              <span className="refusal">승인거부</span>
            </td>
            <td>
              서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로
              전문투자자 승인 불가
            </td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
        </table>
      </div>
      <div className="pagination">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className="flex justify-between align-center table_heading flex-wrap">
        <div className="flex align-center gap-8">
          <h2 className="heading_two">신청 목록</h2>
          <p>
            (총 100명 | 승인대기 <span>1</span>건)
          </p>
        </div>
        <img
          src={filter}
          alt=""
          width={24}
          className="filter"
          onClick={() => setSidebarModal(true)}
        />
        <div className="flex gap-4 dropdown_group">
          <DropdownCustom
            options={currency}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencySelect}
            dropDown="header"
          />
          <DropdownCustom
            options={currencyy}
            onSelect={() => {}}
            selectedOption={currencyySelect}
            setSelectedOption={setCurrencyySelect}
            dropDown="header"
          />
          <DropdownCustom
            options={currencyyy}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencyyySelect}
            dropDown="header"
          />
        </div>
      </div>
      <div className="flex justify-between align-center table_sub_heading">
        <button
          className="dark_button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          등록
        </button>
        <div className="flex gap-4 align-center dropdown_group">
          <DropdownCustom
            options={currencyyy}
            onSelect={() => {}}
            selectedOption={currencySelect}
            setSelectedOption={setCurrencyyySelect}
            dropDown="header"
          />
          <button
            className="dark_button"
            onClick={() => {
              setOpenBigSecondModal(true);
            }}
          >
            저장
          </button>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="main_table">
          <tr>
            <th>No</th>
            <th>기존유형</th>
            <th>신청유형</th>
            <th>제출서류</th>
            <th>신청일시</th>
            <th>승인여부</th>
            <th>승인거부 사유</th>
            <th>승인일시</th>
            <th>관리자</th>
          </tr>
          <tr>
            <td colSpan={9} className="no-record">
              조회 결과가 없습니다.
            </td>
          </tr>
        </table>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <div className="notification_modal_main">
            <div className="flex justify-between align-center">
              <img src={alert} alt="" width={30} />
              <img
                src={close}
                alt=""
                width={24}
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </div>
            <p>선택된 신청건이 없습니다.</p>
            <div className="flex justify-center gap-12">
              <button className="dark_button">확인</button>
            </div>
          </div>
        </Modal>
      )}
      {openBigModal && (
        <Modal setOpenModal={setOpenBigModal}>
          <div className="big_modal_main">
            <div className="flex justify-between align-center big_modal_header">
              <p>투자유형 변경</p>
              <img
                src={close}
                alt=""
                width={24}
                onClick={() => {
                  setOpenBigModal(false);
                }}
              />
            </div>
            <div className="big_modal_body">
              <div className="">
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-top border-left border-bottom-light">
                      회원번호
                    </div>
                  </div>
                  <div className="prefix_field border-top border-right border-bottom">
                    abc111
                  </div>
                </div>
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-left border-bottom-light">
                      회원명/법인명
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom">
                    김길동
                  </div>
                </div>
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-left border-bottom-light">
                      투자유형
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom">
                    <DropdownCustom
                      options={currencyyy}
                      onSelect={() => {}}
                      selectedOption={currencySelect}
                      setSelectedOption={setCurrencyyySelect}
                      dropDown="header"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-left border-bottom">
                      서류첨부
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom flex gap-20">
                    <span className="tag">파일 선택</span>
                    <div className="flex gap-12">
                      <div className="selected_tag">
                        <p>사업자등록증1.jpg</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_2132)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM10.146 10.854L7.5 8.207L4.854 10.854L4.146 10.147L6.793 7.5L4.146 4.854L4.854 4.146L7.5 6.793L10.146 4.146L10.854 4.854L8.207 7.5L10.854 10.146L10.147 10.854H10.146Z"
                              fill="#DDE0E6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2132">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="selected_tag">
                        <p>서류1.jpg</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_2132)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM10.146 10.854L7.5 8.207L4.854 10.854L4.146 10.147L6.793 7.5L4.146 4.854L4.854 4.146L7.5 6.793L10.146 4.146L10.854 4.854L8.207 7.5L10.854 10.146L10.147 10.854H10.146Z"
                              fill="#DDE0E6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2132">
                              <rect width="15" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="note">
                <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
                <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
              </ul>
            </div>
            <div className="flex justify-center gap-12 big_modal_footer">
              <button className="dark_button">확인</button>
              <button className="outline_button">확인</button>
            </div>
          </div>
        </Modal>
      )}
      {openBigSecondModal && (
        <Modal setOpenModal={setOpenBigSecondModal}>
          <div className="big_modal_main">
            <div className="flex justify-between align-center big_modal_header">
              <p>승인거부 사유 확인</p>
              <img
                src={close}
                alt=""
                width={24}
                onClick={() => {
                  setOpenBigSecondModal(false);
                }}
              />
            </div>
            <div className="big_modal_body">
              <div className="">
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-top border-left border-bottom-light">
                      회원번호
                    </div>
                  </div>
                  <div className="prefix_field border-top border-right border-bottom">
                    abc111, abc222
                  </div>
                </div>
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-left border-bottom-light">
                      회원명/법인명
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom">
                    김길동, ㈜가나다라투자
                  </div>
                </div>
                <div className="flex">
                  <div className="block">
                    <div className="prefix border-left border-bottom prefix-last">
                      승인거부 사유
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom">
                    <div className="prefix_field_form m-16-20">
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          서류 식별 불가
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          필수 서류 누락
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          서류의 내용이 등록된 회원정보와 다름
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          서류에 누락된 내용이 있음 (필수정보, 회사직인,
                          본인날인, 본인서명 등)
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          서류의 유효기간이 초과됨
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="prefix_field_form_label">
                        <span className="prefix_field_form_label_text">
                          직접 입력
                        </span>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <textarea
                        placeholder="사유 입력"
                        cols={5}
                        className="textarea"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex gap-5">
                <div className="flex w-100">
                  <div className="block">
                    <div className="prefix border-left border-top border-bottom">
                      최근저장일시
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom border-top">
                    2022-01-01 09:00:00
                  </div>
                </div>
                <div className="flex w-100">
                  <div className="block">
                    <div className="prefix border-left border-top border-bottom">
                      관리자
                    </div>
                  </div>
                  <div className="prefix_field border-right border-bottom border-top">
                    김관리자
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-12 big_modal_footer">
              <button className="dark_button">확인</button>
            </div>
          </div>
        </Modal>
      )}
      {openBigImgModal && (
        <Modal setOpenModal={setOpenBigImgModal}>
          <div className="big_modal_main">
            <div className="flex justify-between align-center big_modal_header">
              <p>서류 보기</p>
              <img
                src={close}
                alt=""
                width={24}
                onClick={() => {
                  setOpenBigImgModal(false);
                }}
              />
            </div>
            <div className="big_modal_body big_modal_img_body">
              <div className="sticky_side">서류</div>
              <div className="img_box_main">
                <div className="img_box">img</div>
                <div className="img_box">img</div>
              </div>
            </div>
            <div className="flex justify-center gap-12 big_modal_footer">
              <button className="de_button">파일 다운로드</button>
              <button className="outline_button">확인</button>
            </div>
          </div>
        </Modal>
      )}
      {sidebarModal && (
        <div
          className="sidebar_main_bg"
          onClick={() => {
            setSidebarModal(false);
          }}
        >
          <div className="sidebar_main">
            <div className="flex align-center justify-between border-bottom pb-20">
              <h3>Filters</h3>
              <img
                src={close}
                alt=""
                width={24}
                onClick={() => {
                  setSidebarModal(false);
                }}
              />
            </div>
            <DropdownCustom
              options={currency}
              onSelect={() => {}}
              selectedOption={currencySelect}
              setSelectedOption={setCurrencySelect}
              dropDown="header"
            />
            <DropdownCustom
              options={currencyy}
              onSelect={() => {}}
              selectedOption={currencyySelect}
              setSelectedOption={setCurrencyySelect}
              dropDown="header"
            />
            <DropdownCustom
              options={currencyyy}
              onSelect={() => {}}
              selectedOption={currencySelect}
              setSelectedOption={setCurrencyyySelect}
              dropDown="header"
            />
            <DropdownCustom
              options={currencyyy}
              onSelect={() => {}}
              selectedOption={currencySelect}
              setSelectedOption={setCurrencyyySelect}
              dropDown="header"
            />
            <button
              className="dark_button"
              onClick={() => {
                setOpenBigModal(true);
              }}
            >
              저장
            </button>
          </div>
        </div>
      )}
      {/*
       */}
    </div>
  );
};

export default Table;
