/* Autogenerated file. Do not edit manually. */
import {
  getEvents,
} from "@dojoengine/utils";

import { useGlobalStore } from '../../hooks/globalStore.js'

const { store, setLogs } = useGlobalStore()

function setLogsFun(log) {
  const logs = store.state.logs
  logs.push(log)
  setLogs(logs)
}

function updateLogsFun(hash, status) {
  const logs = store.state.logs
  logs.forEach((log) => {
    if (log.hash === hash) {
      log.status = status
    }
  })
  setLogs(logs)
}

export async function setupWorld(provider) {
  function actions() {
    const contract_name = "kingdom_lord::actions::kingdom_lord_controller";

    const spawn = async ({ account }) => {
      try {
        const { transaction_hash } = await provider.execute(
          account,
          contract_name,
          "spawn",
          []
        );
        setLogsFun({
          hash: transaction_hash,
          status: "pending",
          message: "spawn",
          time: new Date().getTime()
        })
        try {
          const event = getEvents(
            await account.waitForTransaction(transaction_hash, {
              retryInterval: 300,
            })
          )
          updateLogsFun(transaction_hash, "success")
          return event
        } catch (error) {
          updateLogsFun(transaction_hash, "error")
        }
      } catch (error) {
        setLogsFun({
          hash: '',
          status: "error",
          message: "spawn",
          time: new Date().getTime()
        })
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const startUpgrade = async ({ account, id, data, proof }) => {
      try {
        const { transaction_hash } = await provider.execute(
          account,
          contract_name,
          "start_upgrade",
          [id, ...data, proof]
        );
        setLogsFun({
          hash: transaction_hash,
          status: "pending",
          message: "start upgrade",
          time: new Date().getTime()
        })
        try {
          const event = getEvents(
            await account.waitForTransaction(transaction_hash, {
              retryInterval: 300,
            })
          )
          updateLogsFun(transaction_hash, "success")
          return event
        } catch (error) {
          updateLogsFun(transaction_hash, "error")
        }
      } catch (error) {
        setLogsFun({
          hash: '',
          status: "error",
          message: "start upgrade",
          time: new Date().getTime()
        })
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const finishUpgrade = async ({ account, id }) => {
      try {
        const { transaction_hash } = await provider.execute(
          account,
          contract_name,
          "finish_upgrade",
          [id]
        );
        setLogsFun({
          hash: transaction_hash,
          status: "pending",
          message: "finish upgrade",
          time: new Date().getTime()
        })
        try {
          const event = getEvents(
            await account.waitForTransaction(transaction_hash, {
              retryInterval: 300,
            })
          )
          updateLogsFun(transaction_hash, "success")
          return event
        } catch (error) {
          updateLogsFun(transaction_hash, "error")
        }

      } catch (error) {
        setLogsFun({
          hash: '',
          status: "error",
          message: "finish upgrade",
          time: new Date().getTime()
        })
        console.error("Error executing finish upgrade:", error);
        throw error;
      }
    };

    const startTraining = async ({ account, barrackKind }) => {
      try {
        const { transaction_hash } = await provider.execute(
          account,
          contract_name,
          "start_training",
          [barrackKind]
        );
        setLogsFun({
          hash: transaction_hash,
          status: "pending",
          message: "start training",
          time: new Date().getTime()
        })
        try {
          const event = getEvents(
            await account.waitForTransaction(transaction_hash, {
              retryInterval: 300,
            })
          )
          updateLogsFun(transaction_hash, "success")
          return event
        } catch (error) {
          updateLogsFun(transaction_hash, "error")
        }
      } catch (error) {
        setLogsFun({
          hash: '',
          status: "error",
          message: "start training",
          time: new Date().getTime()
        })
        console.error("Error executing start training:", error);
        throw error;
      }
    };

    const finishTraining = async ({ account, trainingId }) => {
      try {
        const { transaction_hash } = await provider.execute(
          account,
          contract_name,
          "finish_training",
          [trainingId]
        );
        setLogsFun({
          hash: transaction_hash,
          status: "pending",
          message: "finish training",
          time: new Date().getTime()
        })
        try {
          const event = getEvents(
            await account.waitForTransaction(transaction_hash, {
              retryInterval: 300,
            })
          )
          updateLogsFun(transaction_hash, "success")
          return event
        } catch (error) {
          updateLogsFun(transaction_hash, "error")
        }

      } catch (error) {
        setLogsFun({
          hash: '',
          status: "error",
          message: "finish training",
          time: new Date().getTime()
        })
        console.error("Error executing finish training:", error);
        throw error;
      }
    };

    const getBuildingsLevels = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_buildings_levels",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getUnderUpgrading = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_under_upgrading",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getGrowthRate = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_growth_rate",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getUpgradeInfo = async (id, player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_upgrade_info",
          [id, player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getResource = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_resource",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getCompleteUpgrading = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_complete_upgrading",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    };

    const getTroops = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_troops",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    }

    const getTotalPopulation = async (player) => {
      try {
        let data = await provider.callContract(
          contract_name,
          "get_total_population",
          [player]
        );
        return data
      } catch (error) {
        console.error("Error executing spawn:", error);
        throw error;
      }
    }

    return { spawn, startUpgrade, getBuildingsLevels, getUnderUpgrading, getGrowthRate, getUpgradeInfo, finishUpgrade, getResource, getCompleteUpgrading, startTraining, finishTraining, getTroops, getTotalPopulation };
  }
  return {
    actions: actions(),
  };
}
