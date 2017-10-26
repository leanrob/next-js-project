const IndexStyle = () => (
	<style jsx>{`
      div {
        background: red;
        text-align: center;
        padding: 1em;
      }
      @media (min-width: 320px) {
        div {
          background: green;
        }
      }
      @media (min-width: 480px) {
        div {
          background: blue;
        }
      }
      @media (min-width: 600px) {
        div {
          background: brown;
        }
      }
      @media (min-width: 801px) {
        div {
          background: white;
        }
      }
      @media (min-width: 1025px) {
        div {
          background: black;
        }
      }
      @media (min-width: 1281px) {
        div {
          background: grey;
        }
      }
	`}
	</style>
)

export default IndexStyle