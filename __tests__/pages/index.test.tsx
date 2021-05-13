import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../../pages/index"
describe("App", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<IndexPage />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
