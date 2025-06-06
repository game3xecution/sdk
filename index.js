
/**
 * Minimal G3X SDK - Reference Implementation
 */

class G3XClient {
  /**
   * @param {Object} opts
   * @param {string} opts.nodeUrl - G3X node endpoint
   * @param {Object} opts.walletProvider - EIP‑1193 compatible wallet (e.g. window.ethereum)
   */
  constructor ({ nodeUrl, walletProvider }) {
    if (!nodeUrl) throw new Error("nodeUrl required");
    this.nodeUrl = nodeUrl;
    this.wallet = walletProvider;
  }

  // ---- network helpers ----------------------------------------------------

  async _post (path, body) {
    const res = await fetch(`${this.nodeUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`G3X error ${res.status}`);
    return res.json();
  }

  // ---- public API ----------------------------------------------------------

  /**
   * Stream a gameplay action to the G3X node layer.
   * @param {Object} data - arbitrary JSON representing player action
   */
  async syncGameState (data) {
    return this._post("/v1/sync", data);
  }

  /**
   * Finalize a match and push its summary on‑chain.
   * @param {Object} payload - { matchId, winner, rewards }
   */
  async finalizeMatch (payload) {
    return this._post("/v1/finalize", payload);
  }
}

export { G3XClient };
