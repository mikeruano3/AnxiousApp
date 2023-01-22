const color = 'white'

export const tileStyleWeekday = (css: any) => css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 8px;
      &:hover {
        color: ${color};
      }
    `