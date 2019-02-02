import React from "react";
import { Response } from "express";
import { withNamespaces } from "../i18n";

/**
 * ⚠️ TODO - enhance the error page
 */
class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: { res: Response; err: any }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode, namespacesRequired: ["common"] };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    );
  }
}

/**
 * To avoid the following warning, we wrap the _error.tsx page with withNamespaces HOC
 *
 * Warn: You have not declared a namespacesRequired array on your page-level component: Error.
 * This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app.
 * For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies
 */
export default withNamespaces("common")(Error);