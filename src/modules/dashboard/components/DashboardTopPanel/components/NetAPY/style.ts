import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .NetAPY {
    margin-bottom: 10px;
    @include respond-to(lg) {
      margin-bottom: 25px;
    }
    @include respond-to(md) {
      margin-bottom: 18px;
    }
    @include respond-to(sm) {
      margin-bottom: 10px;
    }

    .TextWithModal__text {
      font-size: $regular !important;
      @include respond-to(xl) {
        font-size: $medium !important;
      }
    }

    .ValuePercent {
      margin-top: 6px;
      justify-content: center;
      @include respond-to(sm) {
        margin-top: 0;
      }
    }

    .ValuePercent__value {
      font-size: 24px !important;
      font-weight: 500 !important;
      align-items: center;
      @include respond-to(xl) {
        font-size: 20px !important;
      }
      @include respond-to(lg) {
        font-size: $regular !important;
      }
      @include respond-to(md) {
        font-size: 20px !important;
      }
      @include respond-to(sm) {
        font-size: $medium !important;
      }
    }

    &__collapsed {
      margin-bottom: 0;
      padding-right: 36px;
      @include respond-to(sm) {
        padding-right: 0;
        margin-bottom: 10px;
      }

      .TextWithModal__text {
        font-size: $regular !important;
        @include respond-to(xl) {
          font-size: $medium !important;
        }
      }

      .ValuePercent {
        margin-top: 0;
        justify-content: flex-start;
      }

      .ValuePercent__value {
        font-size: $large !important;
        @include respond-to(xl) {
          font-size: $regular !important;
        }
        @include respond-to(sm) {
          font-size: $medium !important;
        }
      }
    }
  }
`;

export default staticStyles;
